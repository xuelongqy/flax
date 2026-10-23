import { Afterglow, width, height, palettes, compositions } from '../js/src/drawing.ts';

try {
  start();
} catch (error) {
  const message = document.querySelector('#error');
  message.textContent = `This browser could not start Canvas 2D: ${String(error)}`;
  message.hidden = false;
  document.querySelectorAll('button').forEach((button) => {
    button.disabled = true;
  });
  console.error(error);
}

function start() {
  const field = document.querySelector('#light-field');
  const scene = new Afterglow(field.transferControlToOffscreen());
  const status = document.querySelector('#status');
  const motion = document.querySelector('#motion');
  const softGlow = document.querySelector('#soft-glow');
  const capture = document.querySelector('#capture');
  const captureStatus = document.querySelector('#capture-status');
  const postcard = document.querySelector('#postcard');
  const emptyPostcard = document.querySelector('#empty-postcard');
  let frame;
  let lastTime;
  let playing = false;
  let captureId = 0;
  let pointer;

  function choices(values, container, property) {
    return values.map((name, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = name;
      button.addEventListener('click', () => {
        scene[property] = index;
        update();
      });
      container.insertBefore(button, property === 'palette' ? softGlow : null);
      return button;
    });
  }
  const shapes = choices(
    compositions,
    document.querySelector('#compositions'),
    'composition',
  );
  const colors = choices(
    palettes.map(({ name }) => name),
    document.querySelector('#palettes'),
    'palette',
  );
  colors.forEach((button, index) => {
    const swatch = document.createElement('span');
    swatch.className = 'swatch';
    swatch.style.setProperty('--swatch', palettes[index].colors[0]);
    swatch.setAttribute('aria-hidden', 'true');
    button.prepend(swatch);
  });

  function controls() {
    shapes.forEach((button, index) =>
      button.setAttribute('aria-pressed', String(index === scene.composition)),
    );
    colors.forEach((button, index) =>
      button.setAttribute('aria-pressed', String(index === scene.palette)),
    );
    softGlow.setAttribute('aria-pressed', String(scene.dreamy));
    softGlow.textContent = `Soft glow: ${scene.dreamy ? 'on' : 'off'}`;
    motion.textContent = playing ? 'Pause motion' : 'Play motion';
  }
  function update() {
    status.textContent = `${compositions[scene.composition]} · ${palettes[scene.palette].name} · ${scene.dreamy ? 'soft glow' : 'crisp light'}`;
    controls();
    scene.draw();
  }
  function tick(time) {
    if (!playing) return;
    if (lastTime !== undefined) scene.phase += Math.min(time - lastTime, 50) / 1000;
    lastTime = time;
    scene.draw();
    frame = requestAnimationFrame(tick);
  }
  function stop() {
    if (frame !== undefined) cancelAnimationFrame(frame);
    frame = undefined;
    lastTime = undefined;
    playing = false;
    controls();
  }
  motion.addEventListener('click', () => {
    if (playing) stop();
    else {
      playing = true;
      controls();
      frame = requestAnimationFrame(tick);
    }
  });
  softGlow.addEventListener('click', () => {
    scene.dreamy = !scene.dreamy;
    update();
  });
  document.querySelector('#center').addEventListener('click', () => {
    scene.center = { x: 440, y: 254 };
    update();
  });
  document.querySelector('#reset').addEventListener('click', () => {
    stop();
    captureId++;
    capture.disabled = false;
    capture.textContent = 'Capture postcard';
    postcard.getContext('2d').reset();
    postcard.hidden = true;
    emptyPostcard.hidden = false;
    captureStatus.textContent = 'A small keepsake of this moment.';
    scene.reset();
    controls();
    status.textContent = 'Bloom · Aurora · crisp light';
  });

  function reshape(event) {
    const rect = field.getBoundingClientRect();
    scene.reshape(event.clientX - rect.left, event.clientY - rect.top, rect.width);
    status.textContent = 'Light moved · your composition';
  }
  field.addEventListener('pointerdown', (event) => {
    if (pointer !== undefined || event.button !== 0) return;
    pointer = event.pointerId;
    field.setPointerCapture(pointer);
    reshape(event);
  });
  field.addEventListener('pointermove', (event) => {
    if (event.pointerId === pointer) reshape(event);
  });
  field.addEventListener('lostpointercapture', () => {
    pointer = undefined;
  });
  field.addEventListener('keydown', (event) => {
    const offset = {
      ArrowLeft: [-10, 0],
      ArrowRight: [10, 0],
      ArrowUp: [0, -10],
      ArrowDown: [0, 10],
    }[event.key];
    if (!offset) return;
    event.preventDefault();
    scene.reshape(scene.center.x + offset[0], scene.center.y + offset[1], width);
    status.textContent = 'Light moved · your composition';
  });

  capture.addEventListener('click', async () => {
    const id = ++captureId;
    capture.disabled = true;
    capture.textContent = 'Capturing…';
    captureStatus.textContent = 'Developing your postcard…';
    let image;
    try {
      const blob = await scene.canvas.convertToBlob({ type: 'image/png' });
      const bytes = await blob.arrayBuffer();
      image = await createImageBitmap(blob, {
        resizeWidth: 330,
        resizeHeight: 180,
        resizeQuality: 'high',
      });
      if (id !== captureId) return;
      const ctx = postcard.getContext('2d');
      ctx.reset();
      ctx.drawImage(image, 0, 0);
      postcard.hidden = false;
      emptyPostcard.hidden = true;
      captureStatus.textContent = `PNG captured · ${Math.ceil(bytes.byteLength / 1024)} KB · ${width} × ${height}`;
    } catch (error) {
      if (id === captureId)
        captureStatus.textContent = `Capture failed: ${String(error)}`;
    } finally {
      image?.close();
      if (id === captureId) {
        capture.disabled = false;
        capture.textContent = 'Capture postcard';
      }
    }
  });
  window.addEventListener('pagehide', (event) => {
    stop();
    captureId++;
    capture.disabled = false;
    capture.textContent = 'Capture postcard';
    if (!event.persisted) scene.dispose();
  });
  controls();
  scene.draw();
}
