export class Campaign{
    Name: string;
    Country: string;
    Description: string;
    Photo: string;
    AvailableItems: any[];
    LongDescription: string;
    DonationPlaces: any[];
    PhotoDescription: string;
/**
 *
 */
constructor(Name:string, Country:string, Description:string,Photo:string
    , PhotoDescription:string, LongDescription:string, availableItmes:any[],DonationPlaces:any[]) {
    this.Name=Name;
    this.Country=Country;
    this.Description=Description;
    this.Photo=Photo;
    this.PhotoDescription=PhotoDescription;
    this.LongDescription=LongDescription;
    this.AvailableItems=availableItmes;
    this.DonationPlaces=DonationPlaces;
    
}

}