/*!***********************************************!*\
****************************************************
|*|                    _oo0oo_                   |*|
|*|                   o8888888o                  |*|
|*|                   88" . "88                  |*|
|*|                   (| -_- |)                  |*|
|*|                   0\  =  /0                  |*|
|*|                 ___/`---'\___                |*|
|*|               .' \\|     |// '.              |*|
|*|              / \\|||  :  |||// \             |*|
|*|             / _||||| -:- |||||- \            |*|
|*|            |   | \\\  -  /// |   |           |*|
|*|            | \_|  ''\---/''  |_/ |           |*|
|*|            \  .-\__  '-'  ___/-. /           |*|
|*|          ___'. .'  /--.--\  `. .'___         |*|
|*|       ."" '<  `.___\_<|>_/___.' >' "".       |*|
|*|      | | :  `- \`.;`\ _ /`;.`/ - ` : | |     |*|
|*|      \  \ `_.   \_ __\ /__ _/   .-` /  /     |*|
|*|  =====`-.____`.___ \_____/___.-`___.-'=====  |*|
|*|                    `=---='                   |*|
|*|                                              |*|
****************************************************
\*!***********************************************!*/
type SidebarPosition = 'left' | 'right';
type ToogleButtonPosition = 'left' | 'right' | 'center';
type Backdrops = Element[];
type SidebarBoard = Element[];
type Options = {
    position: SidebarPosition;
    buttonPosition: ToogleButtonPosition;
};
export declare class Sidebar {
    position: SidebarPosition;
    buttonPosition: ToogleButtonPosition;
    constructor(options?: Options);
    /**
     * Select All Buttons
     * @returns {Element}
     */
    buttons: NodeListOf<Element>;
    /**
     * Select All Sidebar by Target Id
     * @param {String} id
     * @returns {Element}
     */
    sidebars: (id: string) => NodeListOf<Element>;
    /**
     * Select All backdrop by Target Id
     * @param {String} id
     * @returns {Element}
     */
    backdrops: (id: string) => Element[];
    /**
     * Hidding sidebar element and backdrop element
     * @param {Element[]} sidebars
     * @param {Element[]} backdrops
     */
    hide: (sidebars: SidebarBoard, backdrops: Backdrops) => void;
    /**
     * Showing sidebar element and backdrop element
     * @param {SidebarBoard} sidebars
     * @param {Backdrops} backdrops
     */
    show: (sidebars: SidebarBoard, backdrops: Backdrops) => void;
    /**
     * Mapping toogle button target button [data-sidebar-target] value as Target Id
     * @param {string} target
     */
    toggle: (target?: string) => void;
    start: () => void;
}
export declare namespace Sidebar {
    type SidebarPosition = 'left' | 'right';
    type ToogleButtonPosition = 'left' | 'right' | 'center';
    type Backdrops = Element[];
    type SidebarBoard = Element[];
    type Options = {
        position: SidebarPosition;
        buttonPosition: ToogleButtonPosition;
    };
}
export {};
