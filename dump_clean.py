import json

with open('extracted_slides.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for fname, slides in data.items():
    clean_name = fname.replace('.pptx', '.txt')
    with open(clean_name, 'w', encoding='utf-8') as out:
        out.write(f"=== {fname} ===\n\n")
        for s in slides:
            out.write(f"--- Slide {s['slide']} ---\n")
            out.write(s['text'] + "\n\n")

print("Files written successfully:")
for fname in data:
    print(fname.replace('.pptx', '.txt'))
