import os
import rembg
from PIL import Image

input_dir = r"C:\portasbelly\Fotos Site\KITS"
output_dir = r"C:\portasbelly\public\images\linhas\novos-modelos"
os.makedirs(output_dir, exist_ok=True)

files = [
    ("angelim.jpeg", "kit-angelim.png"),
    ("branco.jpeg", "kit-branco.png"),
    ("imbuia.jpeg", "kit-imbuia.png"),
    ("mgno.jpeg", "kit-mogno.png")
]

for infile, outfile in files:
    in_path = os.path.join(input_dir, infile)
    out_path = os.path.join(output_dir, outfile)
    if os.path.exists(in_path):
        try:
            with open(in_path, "rb") as i:
                input_data = i.read()
            output_data = rembg.remove(input_data)
            with open(out_path, "wb") as o:
                o.write(output_data)
            print(f"Processed: {infile} -> {outfile}")
        except Exception as e:
            print(f"Error processing {infile}: {e}")
