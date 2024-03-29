# Sample Sidebar
![](https://sidebar.hey1010.com/assets/home.webp)

## 📐 DEMO
[Demo](https://sidebar.hey1010.com)


## npm: ***@sophat/sidebar***
The `@sophat/sidebar` project package build for sidebar ui supported with tailwindcss.

## ⬇️ Installation
```sh
npm install @sophat/sidebar --dev
```

## 📂 Usage

If `position: 'left'` Sidebar show up left position `{buttonPosition}` should be `'right'` (optional)
<br/>
If `position: 'right'` Sidebar show up right position `{buttonPosition}` should be `'left'` (optional)

### Module Script
```js
import { Sidebar } from "@sophat/sidebar";

/**
 * @param position: 'left' | 'right'
 * @param buttonPosition: 'left' | 'right' | 'center'
*/
new Sidebar();
```

### HTML
```html
<!-- Button -->
<button type="button" title="Left" aria-label="Close Collapse Sidebar" data-sidebar-target="sidebar-left" class="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-slate-50 ring-1 ring-black/10">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
</button>

<!-- Sidebar Backdrop -->
<div data-sidebar-backdrop="sidebar-left" data-sidebar-target="sidebar-left" class="hidden inset-0 fixed right-0 transition-opacity top-0 w-full h-full bg-black/25 z-[999]"></div>

<!-- Sidebar -->
<div data-sidebar="sidebar-left" data-sidebar-position="left" class="hidden justify-end fixed top-0 opacity-0 transition-all duration-500 w-0 max-w-[90%] h-full bg-white shadow-[-2px_0_20px_0_#00000022] z-[9999]">
    <div class="grid content-start w-full h-full grid-cols-1">

        <!-- Header -->
        <div data-button-position="right" class="flex items-center h-12 px-2">
            <button type="button" aria-label="Close Collapse Sidebar" data-sidebar-target="sidebar-left" class="flex items-center justify-center rounded-lg hover:bg-slate-50 ring-1 ring-black/10 w-7 h-7">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </button>
        </div>

        <!-- Content -->
        <ul role="list" class="flex items-center justify-center flex-col h-full min-h-[calc(100vh_-48px)] bg-slate-100 gap-2 px-5 overflow-x-hidden overflow-y-auto py-7">
            <li class="pb-2 text-sm font-semibold font-content text-slate-700">
                Content Here
            </li>
        </ul>

    </div>
</div>
```


## 🪲 Bugs
[Bug Report](https://github.com/pphatdev/sidebar/issues/new)
