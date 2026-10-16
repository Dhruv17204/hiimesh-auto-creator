import os
from playwright.sync_api import sync_playwright

def render_previews():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    html_path = os.path.join(current_dir, 'media_kit.html')
    file_url = f"file:///{html_path.replace(os.sep, '/')}"
    
    out_dir = os.path.join(current_dir, 'pdf_page_previews')
    os.makedirs(out_dir, exist_ok=True)
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 2000}, device_scale_factor=2)
        page.goto(file_url, wait_until="networkidle")
        page.wait_for_timeout(1000)
        
        pages = page.query_selector_all('.page')
        print(f"Found {len(pages)} pages to screenshot.")
        
        for idx, el in enumerate(pages):
            out_file = os.path.join(out_dir, f"page_{idx+1}.png")
            el.screenshot(path=out_file)
            print(f"Saved: {out_file}")
            
        browser.close()

if __name__ == '__main__':
    render_previews()
