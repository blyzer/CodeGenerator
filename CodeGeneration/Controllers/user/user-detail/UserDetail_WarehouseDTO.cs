
using WG.Entities;
using Common;
using System;
using System.Linq;
using System.Collections.Generic;

namespace WG.Controllers.user.user_detail
{
    public class UserDetail_WarehouseDTO : DataDTO
    {
        
        public long Id { get; set; }
        public long ManagerId { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public UserDetail_WarehouseDTO() {}
        public UserDetail_WarehouseDTO(Warehouse Warehouse)
        {
            
            this.Id = Warehouse.Id;
            this.ManagerId = Warehouse.ManagerId;
            this.Code = Warehouse.Code;
            this.Name = Warehouse.Name;
        }
    }

    public class UserDetail_WarehouseFilterDTO : FilterDTO
    {
        
        public long? Id { get; set; }
        public long? ManagerId { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
    }
}
