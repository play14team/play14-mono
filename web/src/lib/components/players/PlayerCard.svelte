<script lang="ts">
  import { Badge } from '$lib/components/ui/badge';
  import {
    Globe,
    Linkedin,
    Facebook,
    Youtube,
    Instagram,
    Mail,
    Earth,
    UserRound,
    Link2
  } from 'lucide-svelte';
  // Using plain <img> for avatars (lighter + avoids lazy IO issues for small images)
  import { t } from '$lib/i18n';

  interface SocialNetwork {
    type?: string | null;
    url: string;
  }
  interface PlayerData {
    _id: string;
    name: string;
    slug: string;
    position?: 'Player' | 'Host' | 'Mentor' | 'Founder';
    tagline?: string | null;
    avatarId?: string | null;
    avatarUrl?: string | null;
    socialNetworks?: SocialNetwork[];
  }
  interface Props {
    player: PlayerData;
  }
  let { player }: Props = $props();

  const longName = $derived(player.name.length > 24);
  const nameTitle = $derived(player.name.length > 32 ? player.name : undefined);

  function normalizeUrl(url: string) {
    try {
      // Trim, strip protocol, lowercase host+path, remove trailing slash
      const trimmed = url.trim();
      // If it's an email address (no protocol & contains @) keep as-is lowercased
      if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmed)) return trimmed.toLowerCase();
      const noProtocol = trimmed.replace(/^https?:\/\//i, '');
      return noProtocol.replace(/\/$/, '').toLowerCase();
    } catch {
      return url;
    }
  }

  function dedupeSocial(networks: SocialNetwork[] | undefined | null): SocialNetwork[] {
    if (!networks || !networks.length) return [];
    const seen: Record<string, true> = {};
    const result: SocialNetwork[] = [];
    for (const sn of networks) {
      if (!sn || !sn.url) continue;
      const typeKey = (sn.type || 'other').toLowerCase();
      if (typeKey === 'twitter') continue;
      const urlKey = normalizeUrl(sn.url);
      const key = typeKey + '|' + urlKey;
      if (seen[key]) continue;
      seen[key] = true;
      result.push(sn);
    }
    return result;
  }

  const dedupedSocialNetworks = $derived(dedupeSocial(player.socialNetworks));

  function positionLabel(pos?: string) {
    if (!pos) return '';
    const key = pos.toLowerCase();
    return $t(`players.role.${key}`);
  }

  // positionVariant removed (unused after layout refactor)

  // Play14 color scheme mapping (single base variable; hover is computed via color-mix in CSS)
  function positionColorVar(pos?: string) {
    switch (pos) {
      case 'Founder':
        return '--play14-orange';
      case 'Mentor':
        return '--play14-green';
      case 'Host':
        return '--play14-yellow';
      case 'Player':
      default:
        return '--play14-blue';
    }
  }
  const roleColorVar = $derived(positionColorVar(player.position));

  function mapIconAndLabel(type?: string | null) {
    if (!type) return null;
    const tNorm = type.toLowerCase();
    if (tNorm === 'twitter') return null; // Skip twitter per requirements
    switch (tNorm) {
      case 'linkedin':
        return { icon: Linkedin, label: $t('players.social.linkedin') };
      case 'facebook':
        return { icon: Facebook, label: $t('players.social.facebook') };
      case 'youtube':
        return { icon: Youtube, label: $t('players.social.youtube') };
      case 'instagram':
        return { icon: Instagram, label: $t('players.social.instagram') };
      case 'xing':
        return { icon: Globe, label: $t('players.social.xing') };
      case 'email':
        return { icon: Mail, label: $t('players.social.email') };
      case 'website':
      case 'wikipedia':
        return { icon: Earth, label: $t(`players.social.${tNorm}`) };
      case 'vimeo':
        return { icon: Youtube, label: $t('players.social.vimeo') };
      case 'other':
        return { icon: Link2, label: $t('players.social.other') };
      default:
        return { icon: Earth, label: $t('players.social.other') };
    }
  }

  const avatarUrl = $derived(
    player.avatarUrl ||
      (player.avatarId ? `/api/storage/${player.avatarId}` : '/default-player.png')
  );

  // Lightbox state for enlarged avatar
  let showAvatar = $state(false);
  let imgEl: HTMLImageElement | null = null;
  let imgWidth = $state<number | null>(null);
  function updateImgWidth() {
    if (imgEl) imgWidth = imgEl.clientWidth;
  }
  function openAvatar() {
    if (!avatarUrl) return;
    showAvatar = true;
    // allow next frame for image to layout
    requestAnimationFrame(() => updateImgWidth());
  }
  function closeAvatar() {
    showAvatar = false;
  }
  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') closeAvatar();
    if (e.key === 'Enter' && !showAvatar) openAvatar();
  }
  $effect(() => {
    if (!showAvatar) return;
    updateImgWidth();
    const ro = new ResizeObserver(() => updateImgWidth());
    if (imgEl) ro.observe(imgEl);
    const onResize = () => updateImgWidth();
    window.addEventListener('resize', onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', onResize);
    };
  });
</script>

<div
  class="bg-card text-card-foreground group relative flex flex-col overflow-hidden rounded-xl border shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  <div class="p-6">
    <div class="player-grid">
      <div
        class="avatar-wrapper bg-muted focus:ring-primary/50 relative h-20 w-20 shrink-0 cursor-pointer overflow-hidden rounded-full focus:outline-none focus:ring-2"
        tabindex="0"
        role="button"
        aria-label={$t('players.avatar.enlarge')}
        onclick={openAvatar}
        onkeydown={onKeydown}
      >
        {#if avatarUrl}
          <img
            src={avatarUrl}
            alt={player.name}
            loading="lazy"
            width={80}
            height={80}
            class="h-20 w-20 object-cover"
            onerror={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
          <div
            class="text-muted-foreground absolute inset-0 hidden items-center justify-center"
            data-fallback
          >
            <UserRound class="h-10 w-10" />
          </div>
        {:else}
          <div class="text-muted-foreground flex h-full w-full items-center justify-center">
            <UserRound class="h-10 w-10" />
          </div>
        {/if}
      </div>
      <h3
        class={'name font-semibold leading-snug tracking-tight ' +
          (longName ? 'text-lg' : 'text-xl')}
      >
        <a
          href={`/players/${player.slug}`}
          class="hover:text-primary block whitespace-pre-wrap break-words"
          title={nameTitle}>{player.name}</a
        >
      </h3>
      {#if player.tagline}
        <span
          class="tagline text-muted-foreground mt-1 block whitespace-pre-wrap break-words text-sm"
          >{player.tagline}</span
        >
      {/if}
    </div>
  </div>
  {#if dedupedSocialNetworks.length || player.position}
    <div class="mt-auto border-t p-3 pl-4 pr-4">
      <div class="flex items-center gap-3">
        {#if dedupedSocialNetworks.length}
          <ul class="text-muted-foreground flex flex-wrap items-center gap-3">
            {#each dedupedSocialNetworks.slice(0, 6) as sn (sn.url)}
              {@const meta = mapIconAndLabel(sn.type)}
              {#if meta}
                {@const Icon = meta.icon}
                <li>
                  <a
                    href={sn.type?.toLowerCase() === 'email' ? `mailto:${sn.url}` : sn.url}
                    rel="noopener noreferrer"
                    target={sn.type?.toLowerCase() === 'email' ? undefined : '_blank'}
                    class="hover:text-primary inline-flex"
                    aria-label={meta.label}
                    title={meta.label}
                  >
                    <Icon class="h-5 w-5" />
                  </a>
                </li>
              {/if}
            {/each}
          </ul>
        {/if}
        {#if player.position}
          <div class="ml-auto">
            <Badge
              variant="outline"
              class="play14-role-badge shadow-md backdrop-blur-sm"
              style={`background-color: var(${roleColorVar}); border-color: var(${roleColorVar}); --role-bg: var(${roleColorVar});`}
              >{positionLabel(player.position)}</Badge
            >
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>

{#if showAvatar}
  <div
    class="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
    role="dialog"
    aria-modal="true"
    aria-label={player.name + ' avatar'}
    tabindex="0"
    onclick={(e) => {
      if (e.target === e.currentTarget) closeAvatar();
    }}
    onkeydown={(e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') closeAvatar();
    }}
  >
    <div class="lightbox-box" style={imgWidth ? `width:${imgWidth}px` : ''}>
      <div class="relative">
        <img
          bind:this={imgEl}
          onload={updateImgWidth}
          src={avatarUrl}
          alt={player.name}
          class="block max-h-[80vh] max-w-[80vw] rounded-lg object-contain shadow-2xl"
        />
        <button class="close-btn" aria-label={$t('common.close')} onclick={closeAvatar}>✕</button>
      </div>
      <div class="lightbox-caption pt-4 text-center">
        <div class="lightbox-name text-xl font-semibold leading-tight tracking-tight text-white">
          {player.name}
        </div>
        {#if player.tagline}
          <div class="lightbox-tagline mt-2 text-sm text-white/90">{player.tagline}</div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<!-- Accessible i18n keys expected: players.avatar.enlarge, common.close -->

<style>
  .line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-clamp: 1; /* standard property */
    overflow: hidden;
  }
  .break-words {
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  .play14-role-badge {
    background: var(--role-bg) !important;
    color: #fff !important;
    border: 1px solid color-mix(in srgb, var(--role-bg) 80%, #000) !important;
    box-shadow:
      0 2px 4px -1px rgba(0 0 0 / 0.3),
      0 1px 2px -1px rgba(0 0 0 / 0.2);
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: background 0.25s;
  }
  .play14-role-badge:hover {
    /* Darken base color slightly for hover */
    background: color-mix(in srgb, var(--role-bg) 85%, #000) !important;
    border-color: color-mix(in srgb, var(--role-bg) 75%, #000) !important;
  }
  :global(.dark) .play14-role-badge {
    border-color: color-mix(in srgb, var(--role-bg) 60%, #000) !important;
  }
  .lightbox-caption {
    max-width: min(80vw, 60ch);
    margin-left: auto;
    margin-right: auto;
  }
  .lightbox-name {
    text-wrap: pretty;
    overflow-wrap: anywhere;
  }
  .lightbox-tagline {
    max-width: unset;
  }
  .lightbox-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 80vw;
  }
  .close-btn {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: rgba(0, 0, 0, 0.65);
    color: #fff;
    padding: 0.35rem 0.55rem;
    border-radius: 999px;
    line-height: 1;
    font-size: 0.9rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    transition: background 0.2s;
  }
  .close-btn:hover {
    background: rgba(0, 0, 0, 0.85);
  }
  .player-grid {
    display: grid;
    grid-template-columns: 5rem 1fr; /* avatar + content */
    grid-template-rows: auto auto; /* name + tagline */
    column-gap: 1rem;
    row-gap: 0.25rem;
    align-items: start;
  }
  .player-grid .avatar-wrapper {
    grid-row: 1 / span 2;
  }
  .player-grid .name {
    grid-column: 2;
  }
  .player-grid .tagline {
    grid-column: 2;
  }
  @media (max-width: 420px) {
    .player-grid {
      grid-template-columns: 4.5rem 1fr;
    }
    .player-grid .avatar-wrapper {
      height: 4.5rem;
      width: 4.5rem;
    }
  }
</style>
