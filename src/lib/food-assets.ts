/**
 * Central map for all 3D food asset paths.
 * Drop PNG files into /public/images/3d-food/ with matching names.
 * All components import from here — change once, updates everywhere.
 *
 * AVAILABLE FILES (18):
 *   apple, avocado, bananas, berries, blueberries, broccoli, camel-milk,
 *   carrots, dates, fish, honey, lettuce, milk, orange, pineapple,
 *   strawberry, tomatoes, yogurt
 *
 * MISSING (remapped to closest available):
 *   steak → apple, salmon → orange, chicken → pineapple,
 *   eggs → yogurt, cheese → orange, groundBeef → apple,
 *   oliveOil → pineapple, butter → orange, peas → berries,
 *   foodPyramid → avocado (placeholder), foodSpread → apple (placeholder)
 */

const BASE = "/images/3d-food";

export const FOOD_ASSETS = {
  // ── Actual files (direct match) ──
  milk: `${BASE}/milk.png`,
  yogurt: `${BASE}/yogurt.png`,
  avocado: `${BASE}/avocado.png`,
  broccoli: `${BASE}/broccoli.png`,
  tomatoes: `${BASE}/tomatoes.png`,
  lettuce: `${BASE}/lettuce.png`,
  carrots: `${BASE}/carrots.png`,
  bananas: `${BASE}/bananas.png`,
  blueberries: `${BASE}/blueberries.png`,
  strawberry: `${BASE}/strawberry.png`,

  // ── New items (added by user) ──
  apple: `${BASE}/apple.png`,
  orange: `${BASE}/orange.png`,
  berries: `${BASE}/berries.png`,
  pineapple: `${BASE}/pineapple.png`,
  dates: `${BASE}/dates.png`,
  camelMilk: `${BASE}/camel-milk.png`,
  honey: `${BASE}/honey.png`,
  fish: `${BASE}/fish.png`,

  // ── Remapped (missing file → closest visual match) ──
  steak: `${BASE}/apple.png`,        // red, bold
  salmon: `${BASE}/orange.png`,      // orange-colored
  chicken: `${BASE}/pineapple.png`,  // yellow, warm
  eggs: `${BASE}/berries.png`,       // small, round
  cheese: `${BASE}/blueberries.png`, // round shape
  groundBeef: `${BASE}/strawberry.png`, // red
  oliveOil: `${BASE}/carrots.png`,   // orange, healthy
  butter: `${BASE}/bananas.png`,     // yellow, creamy
  peas: `${BASE}/berries.png`,       // small round items

  // ── Placeholders (need custom images — drop in to override) ──
  foodPyramid: `${BASE}/apple.png`,
  foodSpread: `${BASE}/apple.png`,
} as const;

export type FoodAssetKey = keyof typeof FOOD_ASSETS;
