<script lang="ts">
  import { Badge } from '$lib/components/ui/badge';
  import {
    Globe,
    Linkedin,
    Facebook,
    Youtube,
    Instagram,
    Mail,
    Globe2,
    User2,
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

  function positionLabel(pos?: string) {
    if (!pos) return '';
    const key = pos.toLowerCase();
    return $t(`players.role.${key}`);
  }

  function positionVariant(pos?: string): 'default' | 'secondary' | 'outline' | 'destructive' {
    switch (pos) {
      case 'Founder':
        return 'default';
      case 'Mentor':
        return 'secondary';
      case 'Host':
        return 'outline';
      default:
        return 'secondary';
    }
  }

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
        return { icon: Globe2, label: $t(`players.social.${tNorm}`) };
      case 'vimeo':
        return { icon: Youtube, label: $t('players.social.vimeo') };
      case 'other':
        return { icon: Link2, label: $t('players.social.other') };
      default:
        return { icon: Globe2, label: $t('players.social.other') };
    }
  }

  const avatarUrl = $derived(
    player.avatarUrl ||
      (player.avatarId ? `/api/storage/${player.avatarId}` : '/default-player.png')
  );
</script>

<div
  class="bg-card text-card-foreground group flex flex-col overflow-hidden rounded-xl border shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  <div class="flex items-center gap-4 p-6">
    <div class="bg-muted relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
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
        <!-- Fallback badge if image hidden by error -->
        <div
          class="text-muted-foreground absolute inset-0 hidden items-center justify-center"
          data-fallback
        >
          <User2 class="h-10 w-10" />
        </div>
      {:else}
        <div class="text-muted-foreground flex h-full w-full items-center justify-center">
          <User2 class="h-10 w-10" />
        </div>
      {/if}
    </div>
    <div class="flex min-w-0 flex-1 flex-col gap-2">
      <h3 class="text-xl font-semibold leading-tight tracking-tight">
        <a href={`/players/${player.slug}`} class="hover:text-primary">{player.name}</a>
      </h3>
      <div class="flex flex-wrap items-center gap-2">
        {#if player.position}
          <Badge variant={positionVariant(player.position)}>{positionLabel(player.position)}</Badge>
        {/if}
        {#if player.tagline}
          <span class="text-muted-foreground line-clamp-1 text-sm">{player.tagline}</span>
        {/if}
      </div>
    </div>
  </div>
  {#if player.socialNetworks && player.socialNetworks.length}
    <div class="mt-auto border-t p-4">
      <ul class="text-muted-foreground flex flex-wrap items-center gap-3">
        {#each player.socialNetworks.slice(0, 6) as sn (sn.url)}
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
    </div>
  {/if}
</div>

<style>
  .line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
