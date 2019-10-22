import {Model} from 'core';

import {District} from 'models/District';
import {ShippingAddress} from 'models/ShippingAddress';

export class Ward extends Model {
   
  public id?: number;
 
  public name?: string;
 
  public orderNumber?: number;
 
  public districtId?: number;

  public district?: District;
  
  public shippingAddresses?: ShippingAddress[];

  public constructor(ward?: Ward) {
    super(ward);
  }
}
