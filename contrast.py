def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def calculate_luminance(r, g, b):
    def linearize(c):
        c = c / 255.0
        if c <= 0.03928:
            return c / 12.92
        else:
            return ((c + 0.055) / 1.055) ** 2.4
    
    r_lin = linearize(r)
    g_lin = linearize(g)
    b_lin = linearize(b)
    
    luminance = 0.2126 * r_lin + 0.7152 * g_lin + 0.0722 * b_lin
    return luminance

def calculate_contrast(color1, color2):
    r1, g1, b1 = hex_to_rgb(color1)
    r2, g2, b2 = hex_to_rgb(color2)
    
    l1 = calculate_luminance(r1, g1, b1)
    l2 = calculate_luminance(r2, g2, b2)
    
    lighter = max(l1, l2)
    darker = min(l1, l2)
    
    contrast = (lighter + 0.05) / (darker + 0.05)
    return contrast, l1, l2

magenta = '#E91E8C'
navy = '#23324f'

contrast, l_magenta, l_navy = calculate_contrast(magenta, navy)

print("WCAG Contrast Ratio Analysis")
print("=" * 50)
print(f"Foreground: {magenta} (Electric Magenta)")
print(f"Background: {navy} (BSU Navy)")
print(f"Contrast Ratio: {contrast:.2f}:1")
print()
print(f"WCAG AA (4.5:1): {'PASS' if contrast >= 4.5 else 'FAIL'}")
print(f"WCAG AAA (7:1): {'PASS' if contrast >= 7 else 'FAIL'}")
print()
print(f"Luminance: Magenta={l_magenta:.4f}, Navy={l_navy:.4f}")
