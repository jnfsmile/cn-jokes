import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  jokes = { "type": "success", "value": [{ "id": 377, "joke": "When Arnold says &quot;I'll be back&quot; in Terminator movie it is implied that he's going to ask Chuck Norris for help.", "categories": [] }, { "id": 256, "joke": "How many roundhouse kicks does it take to get to the center of a tootsie pop? Just one. From Chuck Norris.", "categories": [] }, { "id": 230, "joke": "Chuck Norris built a time machine and went back in time to stop the JFK assassination. As Oswald shot, Chuck met all three bullets with his beard, deflecting them. JFK's head exploded out of sheer amazement.", "categories": [] }, { "id": 318, "joke": "If you work in an office with Chuck Norris, don't ask him for his three-hole-punch.", "categories": [] }, { "id": 17, "joke": "Chuck Norris does not teabag the ladies. He potato-sacks them.", "categories": ["explicit"] }, { "id": 97, "joke": "Chuck Norris doesn't throw up if he drinks too much. Chuck Norris throws down!", "categories": [] }, { "id": 398, "joke": "Chuck Norris is not Irish. His hair is soaked in the blood of his victims.", "categories": [] }, { "id": 428, "joke": "In the first Jurassic Park movie, the Tyrannosaurus Rex wasn't chasing the jeep. Chuck Norris was chasing the Tyrannosaurus AND the jeep.", "categories": [] }, { "id": 329, "joke": "There are only two things that can cut diamonds: other diamonds, and Chuck Norris.", "categories": [] }, { "id": 236, "joke": "Sticks and stones may break your bones, but a Chuck Norris glare will liquefy your kidneys.", "categories": [] }] };

  getJokes(cat) {
    let list = this.jokes.value;
    if (cat)
      list = this.jokes.value.filter(j => j.categories.includes(cat));
    return list.map(j => j.joke);
  }

  constructor() { }
}
