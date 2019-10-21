
using WG.Entities;
using Common;
using System;
using System.Linq;
using System.Collections.Generic;

namespace WG.Controllers.ward.ward_detail
{
    public class WardDetail_ProvinceDTO : DataDTO
    {
        
        public long Id { get; set; }
        public string Name { get; set; }
        public long OrderNumber { get; set; }
        public WardDetail_ProvinceDTO() {}
        public WardDetail_ProvinceDTO(Province Province)
        {
            
            this.Id = Province.Id;
            this.Name = Province.Name;
            this.OrderNumber = Province.OrderNumber;
        }
    }

    public class WardDetail_ProvinceFilterDTO : FilterDTO
    {
        
        public long? Id { get; set; }
        public string Name { get; set; }
        public long? OrderNumber { get; set; }
    }
}
