import { bind, signal } from '@flax/core';
import type {} from '@flax/core/host';
import { Duration, Uri } from '@flax/dart/core';
import {
  AspectRatio,
  Builder,
  Center,
  Column,
  Container,
  CrossAxisAlignment,
  Icon,
  LayoutBuilder,
  MainAxisSize,
  Padding,
  Row,
  SingleChildScrollView,
  SizedBox,
  State,
  StatefulWidget,
  Text,
  ValueKey,
  Wrap,
  WrapAlignment,
  type Widget,
} from '@flax/flutter/widgets';
import {
  Border,
  BorderRadius,
  BoxDecoration,
  EdgeInsets,
  TextStyle,
} from '@flax/flutter/painting';
import { Clip, Color, FontWeight } from '@flax/dart/ui';
import {
  ChoiceChip,
  IconButton,
  Icons,
  TextButton,
  Theme,
  Tooltip,
} from '@flax/material-ui';
import {
  VideoPlayer,
  VideoPlayerController,
  VideoPlayerValue,
  VideoProgressColors,
  VideoProgressIndicator,
} from '@flax/video-player';

const clips = [
  {
    id: 'bunny',
    title: 'Big Buck Bunny',
    url: 'https://download.blender.org/peach/trailer/trailer_iphone.m4v',
    details: 'HTTPS stream · H.264 / AAC · 480 × 270',
    credit:
      '© 2008 Blender Foundation / www.bigbuckbunny.org · CC BY 3.0 · Official trailer',
  },
  {
    id: 'sintel',
    title: 'Sintel',
    url: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    details: 'HTTPS stream · H.264 / AAC · 854 × 480',
    credit:
      '© copyright Blender Foundation | durian.blender.org · CC BY 3.0 · Official trailer',
  },
] as const;

export function createVideoPlayerExample(): Widget {
  return new VideoExample();
}

class VideoExample extends StatefulWidget {
  createState() {
    return new VideoExampleState();
  }
}

class VideoExampleState extends State<VideoExample> {
  private readonly selected = signal(0);

  override build() {
    const select = (index: number) => {
      this.selected.value = index;
    };
    return SizedBox({
      // A changed key gives each clip its own controller and normal Flutter cleanup.
      child: bind(() => new PlayerPage(this.selected.value, select)),
    });
  }
}

function timestamp(milliseconds: number) {
  const seconds = Math.floor(milliseconds / 1000);
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}

class PlayerPage extends StatefulWidget {
  constructor(
    readonly index: number,
    readonly select: (index: number) => void,
  ) {
    super({ key: ValueKey(clips[index]!.id) });
  }

  createState() {
    return new PlayerState();
  }
}

class PlayerState extends State<PlayerPage> {
  private controller!: VideoPlayerController;
  private readonly value = signal(VideoPlayerValue.uninitialized());
  private readonly error = signal('');
  private disposed = false;
  private readonly update = () => {
    this.value.value = this.controller.value;
  };

  override initState() {
    super.initState();
    this.controller = VideoPlayerController.networkUrl(
      Uri.parse(clips[this.widget.index]!.url),
    );
    this.value.value = this.controller.value;
    this.controller.addListener(this.update);
    void this.controller.initialize().catch((error: unknown) => {
      if (!this.disposed) this.error.value = String(error);
    });
  }

  override dispose() {
    this.disposed = true;
    this.controller.removeListener(this.update);
    // Flutter State.dispose is synchronous; start the native async cleanup here.
    void this.controller.dispose().catch((error: unknown) => {
      // Retirement cancels Promise delivery after native disposal has started.
      if (!String(error).endsWith('FlaxSessionClosed')) {
        console.error('Video disposal failed:', String(error));
      }
    });
    super.dispose();
  }

  override build() {
    const enabled = (action: () => Promise<void>) => {
      // Actions belong to the currently keyed clip, never an outgoing controller.
      const perform = () => {
        void action().catch((error: unknown) => {
          if (!this.disposed) this.error.value = String(error);
        });
      };
      return bind(() =>
        this.value.value.isInitialized && !this.value.value.hasError ? perform : null,
      );
    };
    const clip = clips[this.widget.index]!;
    const play = Icon(Icons.play_arrow_rounded);
    const pause = Icon(Icons.pause_rounded);
    const volume = Icon(Icons.volume_up_rounded);
    const muted = Icon(Icons.volume_off_rounded);
    return Builder({
      builder: (context) => {
        const colors = Theme.of(context).colorScheme;
        const secondary = TextStyle({ color: colors.onSurfaceVariant, fontSize: 12 });
        return LayoutBuilder({
          builder: (_context, constraints) => {
            const width = Math.min(800, Math.max(0, constraints.maxWidth - 48));
            const videoHeight = Math.min(
              (width * 9) / 16,
              Math.max(140, constraints.maxHeight - 320),
            );
            return Center({
              child: SingleChildScrollView({
                padding: EdgeInsets.all(24),
                child: SizedBox({
                  width,
                  child: Column({
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(clip.title, {
                        style: TextStyle({
                          fontSize: 26,
                          fontWeight: FontWeight.w600,
                          color: colors.onSurface,
                        }),
                      }),
                      SizedBox({ height: 6 }),
                      Text(clip.details, { style: secondary }),
                      SizedBox({ height: 12 }),
                      Wrap({
                        spacing: 8,
                        runSpacing: 8,
                        children: clips.map((entry, index) =>
                          ChoiceChip({
                            key: ValueKey(`video-source-${entry.id}`),
                            label: Text(entry.title),
                            selected: index === this.widget.index,
                            onSelected: () => this.widget.select(index),
                          }),
                        ),
                      }),
                      SizedBox({ height: 16 }),
                      Container({
                        decoration: BoxDecoration({
                          color: colors.surfaceContainerLow,
                          borderRadius: BorderRadius.circular(20),
                          border: Border.all({ color: colors.outlineVariant }),
                        }),
                        clipBehavior: Clip.antiAlias,
                        child: Column({
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Container({
                              color: Color(0xff101214),
                              height: videoHeight,
                              child: Center({
                                child: bind(() =>
                                  this.value.value.isInitialized
                                    ? AspectRatio({
                                        aspectRatio: this.value.value.aspectRatio,
                                        child: VideoPlayer(this.controller),
                                      })
                                    : Text('Preparing video…', {
                                        style: TextStyle({
                                          color: Color(0xffd1d5db),
                                          fontSize: 13,
                                        }),
                                      }),
                                ),
                              }),
                            }),
                            Padding({
                              padding: EdgeInsets.symmetric({
                                horizontal: 16,
                                vertical: 12,
                              }),
                              child: Column({
                                mainAxisSize: MainAxisSize.min,
                                crossAxisAlignment: CrossAxisAlignment.stretch,
                                children: [
                                  VideoProgressIndicator(this.controller, {
                                    key: ValueKey('video-progress'),
                                    allowScrubbing: true,
                                    padding: EdgeInsets.symmetric({ vertical: 10 }),
                                    colors: VideoProgressColors({
                                      playedColor: colors.primary,
                                      bufferedColor: colors.outlineVariant,
                                      backgroundColor: colors.surfaceContainerHighest,
                                    }),
                                  }),
                                  Text(
                                    bind(
                                      () =>
                                        `${timestamp(this.value.value.position.inMilliseconds)} / ${timestamp(this.value.value.duration.inMilliseconds)}`,
                                    ),
                                    { key: ValueKey('video-time'), style: secondary },
                                  ),
                                  SizedBox({ height: 10 }),
                                  Wrap({
                                    alignment: WrapAlignment.spaceBetween,
                                    spacing: 16,
                                    runSpacing: 8,
                                    children: [
                                      Row({
                                        mainAxisSize: MainAxisSize.min,
                                        children: [
                                          IconButton.filled({
                                            key: ValueKey('video-toggle'),
                                            tooltip: bind(() =>
                                              this.value.value.isPlaying
                                                ? 'Pause'
                                                : 'Play',
                                            ),
                                            icon: bind(() =>
                                              this.value.value.isPlaying ? pause : play,
                                            ),
                                            iconSize: 28,
                                            onPressed: enabled(() =>
                                              this.value.value.isPlaying
                                                ? this.controller.pause()
                                                : this.controller.play(),
                                            ),
                                          }),
                                          SizedBox({ width: 4 }),
                                          IconButton({
                                            key: ValueKey('video-rewind'),
                                            tooltip: 'Restart',
                                            icon: Icon(Icons.replay_rounded),
                                            onPressed: enabled(() =>
                                              this.controller.seekTo(
                                                Duration({ milliseconds: 0 }),
                                              ),
                                            ),
                                          }),
                                          IconButton({
                                            key: ValueKey('video-seek'),
                                            tooltip: 'Seek to 1 second',
                                            icon: Icon(Icons.skip_next_rounded),
                                            onPressed: enabled(() =>
                                              this.controller.seekTo(
                                                Duration({ seconds: 1 }),
                                              ),
                                            ),
                                          }),
                                        ],
                                      }),
                                      Row({
                                        mainAxisSize: MainAxisSize.min,
                                        children: [
                                          IconButton({
                                            key: ValueKey('video-mute'),
                                            tooltip: bind(() =>
                                              this.value.value.volume === 0
                                                ? 'Unmute'
                                                : 'Mute',
                                            ),
                                            icon: bind(() =>
                                              this.value.value.volume === 0
                                                ? muted
                                                : volume,
                                            ),
                                            onPressed: enabled(() =>
                                              this.controller.setVolume(
                                                this.value.value.volume === 0 ? 1 : 0,
                                              ),
                                            ),
                                          }),
                                          IconButton({
                                            key: ValueKey('video-loop'),
                                            tooltip: 'Loop',
                                            icon: Icon(Icons.repeat_rounded),
                                            isSelected: bind(
                                              () => this.value.value.isLooping,
                                            ),
                                            onPressed: enabled(() =>
                                              this.controller.setLooping(
                                                !this.value.value.isLooping,
                                              ),
                                            ),
                                          }),
                                          Tooltip({
                                            message: 'Playback speed',
                                            child: TextButton({
                                              key: ValueKey('video-speed'),
                                              onPressed: enabled(() =>
                                                this.controller.setPlaybackSpeed(
                                                  this.value.value.playbackSpeed === 1
                                                    ? 2
                                                    : 1,
                                                ),
                                              ),
                                              child: Text(
                                                bind(
                                                  () =>
                                                    `${this.value.value.playbackSpeed}×`,
                                                ),
                                              ),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      SizedBox({ height: 14 }),
                      Text(
                        bind(
                          () =>
                            this.value.value.errorDescription ??
                            (this.error.value ||
                              'Drag the timeline to seek · Streaming requires internet'),
                        ),
                        { key: ValueKey('video-status'), style: secondary },
                      ),
                      SizedBox({ height: 6 }),
                      Text(clip.credit, { style: secondary }),
                    ],
                  }),
                }),
              }),
            });
          },
        });
      },
    });
  }
}
