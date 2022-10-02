export class QueryModel {
		    search: string;
		    word :string;
		    place: string;
		    person: string;
		    gender: string;
		    yearMin: string;
		    yearMax: string;
		    inclNoYear: boolean;
		    limit: string;

	constructor(
		    search?: string,
		    word? :string,
		    place?: string,
		    person?: string,
		    gender?: string,
		    yearMin?: string,
		    yearMax?: string,
		    inclNoYear?: boolean,
		    limit?: string
		   ){
			   if (search==undefined){this.search=""} else {this.search=search;}
			   if (word==undefined){this.word=""} else {this.word = word;}
			   if (place==undefined){this.place=""} else {this.place = place;}
			   if (person==undefined){this.person=""} else {this.person = person;}
			   if (gender==undefined){this.gender=""} else {this.gender = gender;}
			   if (yearMin==undefined){this.yearMin=""} else {this.yearMin = yearMin;}
			   if (yearMax==undefined){this.yearMax=""} else {this.yearMax = yearMax;}
			   if (inclNoYear==undefined){this.inclNoYear=false} else {this.inclNoYear = inclNoYear;}
			   if (limit==undefined){this.limit=""} else {this.limit= limit;}
	}
}


