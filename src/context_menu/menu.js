import { Menu } from '@/core/menu';
import { RandomBackgroundModule } from "@/context_menu/modules/random_background.module";
import { ClicksModule } from "@/context_menu/modules/clicks.module";
import { ShapeModule } from "@/context_menu/modules/shape.module";
import { RandomSound } from "@/context_menu/modules/random_sound.module";
import { TimerModule } from "@/context_menu/modules/timer.module";
import { CustomText } from "@/context_menu/modules/custom_text.module";
import { WizardModule } from "@/context_menu/modules/wizards.module";

const shapeModule =  new ShapeModule('shapeModule', 'Случайная фигура');
const changeBackground = new RandomBackgroundModule('randomBackground', 'Случайный фон');
const clickModule = new ClicksModule('clickModule', 'Аналитика кликов');
const customText = new CustomText('customText', 'Кастомное сообщение');
const timerModule = new TimerModule('timer', 'Таймер отчёта');
const randomSound = new RandomSound('randomSound', 'Случайный звук');
const wizardModule = new WizardModule('wizardModule', 'Битва магов');


export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
    }
    open(event) {
        const contextMenu = document.querySelector('#menu');
        document.body.addEventListener('contextmenu', event => {
            const wizards = document.querySelector('.wizards');
            if (wizards) {
                wizards.remove();
            }
            event.preventDefault();
            contextMenu.classList.add('open');
            contextMenu.style.top = `${event.clientY}px`;
            contextMenu.style.left = `${event.clientX}px`;
        })
        document.body.addEventListener('click', event => {
            if (event.button !== 2) {
                contextMenu.classList.remove('open');
            }
        })
    }
    close() {
        const contextMenu = document.querySelector('#menu');
        contextMenu.classList.remove('open')
    }

    add() {
        const contextMenu = document.querySelector('#menu');
        const contextMenuItems = [
            changeBackground,
            clickModule,
            shapeModule,
            customText,
            timerModule,
            randomSound,
            wizardModule
        ];

        contextMenuItems.forEach((el) => {
            contextMenu.insertAdjacentHTML('beforeend', el.toHTML());
        })
    }
    trigger() {
        shapeModule.trigger();
        changeBackground.trigger();
        clickModule.trigger();
        customText.trigger();
        timerModule.trigger();
        randomSound.trigger();
        wizardModule.trigger();
    }
}