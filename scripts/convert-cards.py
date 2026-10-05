"""
Genera las cartas en WebP a partir de los PNG originales.

Por cada PNG de src/assets/img/cards:
  1. Recorta el borde transparente (deja solo la carta).
  2. Lo guarda junto al original como .webp (los PNG no se modifican).

Uso:  python scripts/convert-cards.py
Requiere Pillow:  pip install pillow
"""
from pathlib import Path

from PIL import Image

CARDS_DIR = Path(__file__).resolve().parent.parent / "src" / "assets" / "img" / "cards"
WEBP_QUALITY = 85


def main() -> None:
    total_png = total_webp = 0
    for png in sorted(CARDS_DIR.glob("*.png")):
        image = Image.open(png).convert("RGBA")
        bbox = image.getchannel("A").getbbox()
        card = image.crop(bbox) if bbox else image

        webp = png.with_suffix(".webp")
        card.save(webp, "WEBP", quality=WEBP_QUALITY, method=6)

        total_png += png.stat().st_size
        total_webp += webp.stat().st_size
        print(f"{png.name}: {image.size} -> {card.size}")

    print(f"\nPNG: {total_png / 1e6:.1f} MB | WebP: {total_webp / 1e6:.2f} MB")


if __name__ == "__main__":
    main()
