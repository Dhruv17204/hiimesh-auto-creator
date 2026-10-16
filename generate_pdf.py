import os
import sys
from playwright.sync_api import sync_playwright

def generate_pdf():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    html_path = os.path.join(current_dir, 'media_kit.html')
    output_pdf = os.path.join(current_dir, 'Hiimesh_Auto_Creator_Media_Kit.pdf')
    
    file_url = f"file:///{html_path.replace(os.sep, '/')}"
    print(f"Loading: {file_url}")
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Create high-DPI viewport
        page = browser.new_page(viewport={"width": 1280, "height": 1800}, device_scale_factor=2)
        
        # Navigate and wait for all Google Fonts & images to load completely
        page.goto(file_url, wait_until="networkidle")
        page.wait_for_timeout(1000)
        
        # Generate A4 PDF with zero margins (margins handled in CSS per-page)
        page.pdf(
            path=output_pdf,
            format="A4",
            print_background=True,
            prefer_css_page_size=True,
            margin={"top": "0", "right": "0", "bottom": "0", "left": "0"}
        )
        browser.close()
        
    print(f"SUCCESS: Generated PDF at {output_pdf}")
    print(f"File size: {os.path.getsize(output_pdf) / 1024:.2f} KB")

if __name__ == '__main__':
    generate_pdf()
