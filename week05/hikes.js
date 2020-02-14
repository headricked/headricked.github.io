export default class Hikes {

    hikeObject;
    parentElement;

    constructor(parentElement, hikeObject) {
        this.parentElement = parentElement
        this.hikeObject = hikeObject
    }


    render() {
        this.parentElement.innerHTML += 
        ` <h2>${this.hikeObject.name}</h2>
        <div class="image"><img src="${this.hikeObject.imgBasePath}${this.hikeObject.imgSrc}" alt="${this.hikeObject.imgAlt}"></div>
        <div>
                <div>
                    <h3>Distance</h3>
                    <p>${this.hikeObject.distance}</p>
                </div>
                <div>
                    <h3>Difficulty</h3>
                    <p>${this.hikeObject.difficulty}</p>
                </div>
        </div>`;
    }
}