export class Sidebar {

    constructor(options = [])
    {
        this.position = options.position || 'left';
        this.buttonPosition = options.buttonPosition;
        this.start()
    }


    /**
     * Select All Buttons
     * @returns {Element}
     */
    buttons     = document.querySelectorAll('[data-sidebar-target]');


    /**
     * Select All Sidebar by Target Id
     * @param {String} id
     * @returns {Element}
     */
    sidebars    = (id) => document.querySelectorAll(`[data-sidebar="${id}"]`)


    /**
     * Select All backdrop by Target Id
     * @param {String} id
     * @returns {Element}
     */
    backdrops = (id) => document.querySelectorAll(`[data-sidebar-backdrop="${id}"]`);


    /**
     * Hidding sidebar element and backdrop element
     *
     * @param {Element[]} sidebars
     * @param {Element[]} backdrops
     * @param {...any} options
     */
    hide = (sidebars, backdrops) =>
    {
        Array.from(sidebars).map(
            sidebar => {
                if (sidebar.classList.contains('flex')) {
                    sidebar.style.width = 0
                    Array.from(backdrops).map( backdrop => backdrop.style.opacity = 0)
                    setTimeout(
                        () => {

                            sidebar.style.opacity = 0;
                            Array.from(backdrops).map(backdrop => backdrop.classList.add('hidden'))
                            sidebar.classList.remove('flex')
                            sidebar.classList.add('hidden')
                        }, 200
                    );
                }
            }
        )
    }


    /**
     * Showing sidebar element and backdrop element
     *
     * @param {Element[]} sidebars
     * @param {Element[]} backdrops
     * @param {...any} options
     */
    show = (sidebars, backdrops) =>
    {
        Array.from(sidebars).map(
            sidebar => {
                if (sidebar.classList.contains('hidden')) {
                    sidebar.classList.add('flex')
                    sidebar.classList.remove('hidden')

                    Array.from(backdrops).map(backdrop => {
                        backdrop.classList.add('flex')
                        backdrop.classList.remove('hidden')
                    })

                    setTimeout(
                        () => {
                            Array.from(backdrops).map(backdrop => backdrop.style.opacity = 1 )
                            sidebar.style.opacity = 1;
                            sidebar.style.width = '18rem'
                        }, 200
                    );
                }
            }
        )
    }


    /**
     * Mapping toogle button target button [data-sidebar-target] value as Target Id
     */
    toggle = (target = null) =>
    {
        Array.from(this.buttons).map(
            button => {
                const targetId  = target || button.dataset.sidebarTarget;
                const sidebars  = this.sidebars(targetId);
                const backdrops = this.backdrops(targetId);

                if (this.position)
                {
                    Array.from(sidebars).map(
                        sidebar => {
                            const button    = sidebar.querySelector('[data-button-position]');
                            const position  = sidebar.dataset.sidebarPosition || this.position;

                            if (button)
                            {
                                const buttonPosition = button.dataset.buttonPosition || this.buttonPosition;
                                if (buttonPosition != "" || buttonPosition!= undefined || buttonPosition!= null)
                                {
                                    switch (buttonPosition)
                                    {
                                        case "left":
                                            button.style.justifyContent = "flex-start";
                                            break;
                                        case "right":
                                            button.style.justifyContent = "flex-end";
                                            break;
                                        case "center":
                                            button.style.justifyContent = "center";
                                            break;
                                        default:
                                            button.style.justifyContent = "flex-end"
                                            break;
                                    }
                                }
                            }
                            sidebar.style   = `${position}: 0;`;
                        }
                    )

                }

                button.addEventListener('click',
                    (e) => {
                        e.preventDefault()
                        this.hide(sidebars, backdrops)
                        this.show(sidebars, backdrops)
                    }
                );
            }
        )
    }


    start = () =>
    {
        this.toggle()
    }
}
