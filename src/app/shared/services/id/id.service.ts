import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdService {

  public ids: string[] = [];

  constructor() { }

  /**
   *  Receive all used IDs
   * @returns A list of all used ID's
   */
  public idList(): string[] {
    return this.ids;
  }

  /**
   * Generate a unique ID
   * @returns New ID
   */
  public generateId(): string {
    let isUnique: boolean = false;
    let newId: string = '';

    while( !isUnique ) {
      newId = this.stringGen();
      if( !this.exists( newId )) {
        isUnique = true;
        this.ids.push( newId );
      }
    }

    console.log( newId );
    return newId;
  }

  /**
   * Remove ID so that it can be reused
   * @param id ID to remove
   */
  public removeId( id: string ): void {
    const index = this.ids.indexOf(id);
    if( index != -1 ) {
      this.ids.splice( index, 1 );
    }
  }

  private stringGen(): string {
    const newString = `${this.substringGen()}${this.substringGen()}-${this.substringGen()}-${this.substringGen()}-${this.substringGen()}-${this.substringGen()}${this.substringGen()}${this.substringGen()}`;
    return newString;
  }

  private substringGen(): string {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }

  private exists( id: string ): boolean {
    return this.ids.includes( id );
  }

}
