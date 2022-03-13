import {Module} from '@/core/module';


export class WizardModule extends Module {
    constructor(type, text) {
        super(type, text);
    }
    toHTML() {
        return super.toHTML();
    }

    trigger() {
        const soundModule = document.querySelector("[data-type = 'wizardModule']");
        soundModule.addEventListener('click', () => {
            const wizard = document.querySelector('.wizards');
            if(wizard) {
                wizard.remove();
                this.createElement();
            } else {
                this.createElement();
            }
        })
    }

    createElement() {
        const wizardsInner = document.createElement('div');

        wizardsInner.classList = 'wizards';
        wizardsInner.innerHTML = `
        <div class="wizards">
          <div class="wizards__title">Можно нанести удар</div>
          <div class="wizards__inner">
            <div class="wizards__item wizards__item--left">
              <img class="wizards__img wizards__img--left" src="../src/assets/images/wizard-left.png" alt="">
              <span class="wizards__name">Здоровье</span>
              <span class="wizards__health wizards__health--left"></span>
              <div class="wizards__ball wizards__ball--left"></div>
            </div>
            <div class="wizards__item wizards__item--right">
              <img class="wizards__img wizards__img--right" src="../src/assets/images/wizard-right.png" alt="">
              <span class="wizards__name">Здоровье</span>
              <span class="wizards__health wizards__health--right"></span>
              <div class="wizards__ball wizards__ball--right"></div>
            </div>
          </div>
        </div>
        `
        document.body.append(wizardsInner);
        this.strike();
    }

    strike () {
        const wizards = document.querySelector('.wizards');
        const wizardImgLeft = document.querySelector('.wizards__img--left');
        const wizardWrapper = document.querySelector('.wizards__inner');
        const wizardImgRight = document.querySelector('.wizards__img--right');
        const wizardBallLeft = document.querySelector('.wizards__ball--left');
        const wizardBallRight = document.querySelector('.wizards__ball--right');
        const wizardHealthLeft = document.querySelector('.wizards__health--left');
        const wizardHealthRight = document.querySelector('.wizards__health--right');
        const wizardTitle = document.querySelector('.wizards__title');
        let healthLeft = 100;
        let healthRight = 100;

        wizardHealthLeft.innerText = healthLeft;
        wizardHealthRight.innerText = healthRight;


        wizardImgLeft.addEventListener('click', () => {
            wizardBallLeft.style.opacity = '1';
            wizardTitle.style.opacity = '0';
            setTimeout(()=> {
                wizardBallLeft.style.right = '-150%';
            },500)
            setTimeout(()=> {
                wizardBallLeft.style.transform = 'scale(2)';
                wizardImgRight.style.transform = 'translate(10px, -50%)';
            },1000)

            setTimeout(()=> {
                wizardBallLeft.style.transition = 'none';
                wizardBallLeft.style.opacity = '0';
                wizardBallLeft.style.right = '10px';
                wizardBallLeft.style.transform = 'scale(1)';

            },1500)
                setTimeout(()=> {
                    wizardBallLeft.style.transition = 'all 0.5s';
                },1700)
            setTimeout(()=> {
                wizardTitle.style.opacity = '1';
                healthRight -= 50;
                wizardHealthRight.innerText = healthRight;
                wizardImgRight.style.transform = 'translate(0, -50%)';
                if (healthLeft <= 0 || healthRight <= 0 ) {
                    wizardTitle.innerText = 'Игра окончена! Победил красный маг';
                    wizardTitle.style.textShadow = '0 0 0.5em red';
                    wizardWrapper.remove();
                    setTimeout(()=> {
                        wizards.remove();
                    },1000)
                }
            },2000)
        })

        wizardImgRight.addEventListener('click', () => {
            wizardTitle.style.opacity = '0';
            wizardBallRight.style.opacity = '1';

            setTimeout(()=> {
                wizardBallRight.style.left = '-150%';
            },500)

            setTimeout(()=> {
                wizardBallRight.style.transform = 'scale(2)';
                wizardImgLeft.style.transform = 'translate(-10px, -50%)';
            },1000)

            setTimeout(()=> {
                wizardBallRight.style.transition = 'none';
                wizardBallRight.style.opacity = '0';
                wizardBallRight.style.left = '10px';
                wizardBallRight.style.transform = 'scale(1)';
            },1500)

            setTimeout(()=> {
                wizardBallRight.style.transition = 'all 0.5s';
            },1700)

            setTimeout(()=> {
                wizardTitle.style.opacity = '1';
                healthLeft -= 50;
                wizardHealthLeft.innerText = healthLeft;
                wizardImgLeft.style.transform = 'translate(0, -50%)';

                if (healthLeft <= 0 || healthRight <= 0 ) {
                    wizardTitle.innerText = 'Игра окончена! Победил синий маг';
                    wizardTitle.style.textShadow = '0 0 0.5em blue';
                    wizardWrapper.remove();

                    setTimeout(()=> {
                        wizards.remove();
                    },1000)
                }
            },2000)
        })
    }
}