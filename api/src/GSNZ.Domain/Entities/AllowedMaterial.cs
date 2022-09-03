namespace GSNZ.Domain.Entities;

public class AllowedMaterial
{
    public string Name { get; private set; }
    public string? PurchaseUrl { get; private set; }

    public AllowedMaterial(string name, string? purchaseUrl)
    {
        this.Name = name;
        this.PurchaseUrl = purchaseUrl;
    }
}