import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  url = "http://api.icndb.com/jokes/random/";

  jokes = { "type": "success", "value": [{ "id": 89, "joke": "For some, the left testicle is larger than the right one. For Chuck Norris, each testicle is larger than the other one.", "categories": ["explicit"] }, { "id": 495, "joke": "Chuck Norris doesn't needs try-catch, exceptions are too afraid to raise.", "categories": ["nerdy"] }, { "id": 436, "joke": "Chuck Norris describes human beings as &quot;a sociable holder for blood and guts&quot;.", "categories": [] }, { "id": 64, "joke": "There are no races, only countries of people Chuck Norris has beaten to different shades of black and blue.", "categories": [] }, { "id": 210, "joke": "Chuck Norris can judge a book by its cover.", "categories": [] }, { "id": 403, "joke": "Chuck Norris crossed the road. No one has ever dared question his motives.", "categories": [] }, { "id": 548, "joke": "Product Owners never argue with Chuck Norris after he demonstrates the DropKick feature.", "categories": ["nerdy"] }, { "id": 191, "joke": "The easiest way to determine Chuck Norris' age is to cut him in half and count the rings.", "categories": [] }, { "id": 187, "joke": "# Chuck Norris's show is called Walker: Texas Ranger, because Chuck Norris doesn't run.", "categories": [] }, { "id": 88, "joke": "Chuck Norris doesnt shave; he kicks himself in the face. The only thing that can cut Chuck Norris is Chuck Norris.", "categories": [] }] };

  getJokes(cat, qty = 10) {
    let list = this.http.get(`${this.url}${qty}` + (cat ? `?limitTo=[${cat}]` : '')).pipe(
      tap()
    );

    return list;
  }

  constructor(
    private http: HttpClient,
  ) { }
}
