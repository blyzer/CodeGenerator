
using WG.Entities;
using Common;
using System;
using System.Linq;
using System.Collections.Generic;

namespace WG.Controllers.customer.customer_detail
{
    public class CustomerDetail_CustomerDTO : DataDTO
    {
        
        public long Id { get; set; }
        public string Username { get; set; }
        public string DisplayName { get; set; }
        public CustomerDetail_CustomerDTO() {}
        public CustomerDetail_CustomerDTO(Customer Customer)
        {
            
            this.Id = Customer.Id;
            this.Username = Customer.Username;
            this.DisplayName = Customer.DisplayName;
        }
    }

    public class CustomerDetail_CustomerFilterDTO : FilterDTO
    {
        
        public long? Id { get; set; }
        public string Username { get; set; }
        public string DisplayName { get; set; }
    }
}
