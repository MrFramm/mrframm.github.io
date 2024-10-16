import { Application, Assets, Sprite, Container,  Texture, TilingSprite, DisplacementFilter } from './pixi.mjs';
  const app = new PIXI.Application();
  // Store an array of fish sprites for animation.
const fishes = [];
 await app.init({background: '#1099bb',  resizeTo: window });
  document.body.appendChild(app.canvas);  
      // Add a variable to count up the seconds our demo has been running
  let elapsed = 0.0;
  // Tell our application's ticker to run a new callback every frame, passing
  // in the amount of time that has passed since the last tick
  app.ticker.add((ticker) => {
    // Add the time to our total elapsed time
    elapsed += ticker.deltaTime;
    // Update the sprite's X position based on the cosine of our elapsed time.  We divide
    // by 50 to slow the animation down a bit...
    // sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
  });
async function preload()
{
    const assets = [
        { alias: 'background', src: 'https://pixijs.com/assets/tutorials/fish-pond/pond_background.jpg' },
        { alias: 'fish1', src: 'https://pixijs.com/assets/tutorials/fish-pond/fish1.png' },
        { alias: 'fish2', src: 'https://pixijs.com/assets/tutorials/fish-pond/fish2.png' },
        { alias: 'fish3', src: 'https://pixijs.com/assets/tutorials/fish-pond/fish3.png' },
        { alias: 'fish4', src: 'https://pixijs.com/assets/tutorials/fish-pond/fish4.png' },
        { alias: 'fish5', src: 'https://pixijs.com/assets/tutorials/fish-pond/fish5.png' },
        { alias: 'overlay', src: 'https://pixijs.com/assets/tutorials/fish-pond/wave_overlay.png' },
        { alias: 'displacement', src: 'https://pixijs.com/assets/tutorials/fish-pond/displacement_map.png' },
    ];
    await Assets.load(assets);
}

function addBackground(app)
{
  const background = Sprite.from('background');
app.stage.addChild(background);
background.anchor.set(0.5);
    if (app.screen.width > app.screen.height)
{
    background.width = app.screen.width * 1.2;
    background.scale.y = background.scale.x;
}
else
{
    background.height = app.screen.height  * 1.2;
    background.scale.x = background.scale.y;
}
  background.x = app.screen.width / 2;
background.y = app.screen.height / 2;
}
function addFishes(app, fishes)
{
   const fishContainer = new Container();

app.stage.addChild(fishContainer);
const fishCount = 20;
const fishAssets = ['fish1', 'fish2', 'fish3', 'fish4', 'fish5'];
  for (let i = 0; i < fishCount; i++)
{
    const fishAsset = fishAssets[i % fishAssets.length];
    const fish = Sprite.from(fishAsset);

    fish.anchor.set(0.5);

    fish.direction = Math.random() * Math.PI * 2;
    fish.speed = 2 + Math.random() * 2;
    fish.turnSpeed = Math.random() - 0.8;

    fish.x = Math.random() * app.screen.width;
    fish.y = Math.random() * app.screen.height;
    fish.scale.set(0.5 + Math.random() * 0.2);

    fishContainer.addChild(fish);
    fishes.push(fish);
}
  
}
export function animateFishes(app, fishes, time)
{
    const delta = time.deltaTime;

const stagePadding = 100;
const boundWidth = app.screen.width + stagePadding * 2;
const boundHeight = app.screen.height + stagePadding * 2;
  fishes.forEach((fish) =>
{
    fish.direction += fish.turnSpeed * 0.01;
    fish.x += Math.sin(fish.direction) * fish.speed;
    fish.y += Math.cos(fish.direction) * fish.speed;
    fish.rotation = -fish.direction - Math.PI / 2;

    if (fish.x < -stagePadding)
    {
        fish.x += boundWidth;
    }
    if (fish.x > app.screen.width + stagePadding)
    {
        fish.x -= boundWidth;
    }
    if (fish.y < -stagePadding)
    {
        fish.y += boundHeight;
    }
    if (fish.y > app.screen.height + stagePadding)
    {
        fish.y -= boundHeight;
    }
});
}
let overlay;

export function addWaterOverlay(app)
{
    const texture = Texture.from('overlay');

overlay = new TilingSprite({
    texture,
    width: app.screen.width,
    height: app.screen.height,
});
app.stage.addChild(overlay);
}

export function animateWaterOverlay(app, time)
{
   elapsed += time.deltaTime;
overlay.tilePosition.x = elapsed * -1;
overlay.tilePosition.y = elapsed * -1;
}

(async () =>
{
 
    await preload();

    addBackground(app);
  
    addFishes(app, fishes);
    addWaterOverlay(app);
    addDisplacementEffect(app);
  // Add the animation callbacks to the application's ticker.
    app.ticker.add((time) =>
    {
        animateFishes(app, fishes, time);
        animateWaterOverlay(app, time);
    });
})();

