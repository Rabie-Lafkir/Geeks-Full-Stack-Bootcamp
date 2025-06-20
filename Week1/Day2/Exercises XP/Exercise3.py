brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

brand["number_stores"] = 2

print(f"Zara's clients include: {', '.join(brand['type_of_clothes'])}.")

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

brand.pop("creation_date", None)

print("Last international competitor:", brand["international_competitors"][-1])

print("Major colors in the US:", brand["major_color"]["US"])

print("Number of keys in brand dictionary:", len(brand))

print("Keys in brand dictionary:", list(brand.keys()))

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

# Merge dictionaries (this will overwrite number_stores)
brand.update(more_on_zara)

# Print the result
print("\nUpdated brand dictionary after merging:")
print(brand)
