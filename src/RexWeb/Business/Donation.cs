using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RexWeb.Business
{
    public class DonationRepository : Repository<Donation> { }

    public class Donation : IEntity
    {
        public int Id { get; set; }

        public Campaign Campaign { get; set; }
        public string Description { get; set; }

    }
}
