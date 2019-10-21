
using WG.Entities;
using Common;
using System;
using System.Linq;
using System.Collections.Generic;

namespace WG.Controllers.partner.partner_master
{
    public class PartnerMaster_ItemDTO : DataDTO
    {
        
        public long Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string SKU { get; set; }
        public string Description { get; set; }
        public long TypeId { get; set; }
        public long StatusId { get; set; }
        public long PartnerId { get; set; }
        public long CategoryId { get; set; }
        public long BrandId { get; set; }
        public PartnerMaster_BrandDTO Brand { get; set; }
        public PartnerMaster_CategoryDTO Category { get; set; }
        public PartnerMaster_ItemStatusDTO Status { get; set; }
        public PartnerMaster_ItemTypeDTO Type { get; set; }
        public PartnerMaster_ItemDTO() {}
        public PartnerMaster_ItemDTO(Item Item)
        {
            
            this.Id = Item.Id;
            this.Code = Item.Code;
            this.Name = Item.Name;
            this.SKU = Item.SKU;
            this.Description = Item.Description;
            this.TypeId = Item.TypeId;
            this.StatusId = Item.StatusId;
            this.PartnerId = Item.PartnerId;
            this.CategoryId = Item.CategoryId;
            this.BrandId = Item.BrandId;
            this.Brand = new PartnerMaster_BrandDTO(Item.Brand);

            this.Category = new PartnerMaster_CategoryDTO(Item.Category);

            this.Status = new PartnerMaster_ItemStatusDTO(Item.Status);

            this.Type = new PartnerMaster_ItemTypeDTO(Item.Type);

        }
    }

    public class PartnerMaster_ItemFilterDTO : FilterDTO
    {
        
        public long? Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string SKU { get; set; }
        public string Description { get; set; }
        public long? TypeId { get; set; }
        public long? StatusId { get; set; }
        public long? PartnerId { get; set; }
        public long? CategoryId { get; set; }
        public long? BrandId { get; set; }
    }
}
