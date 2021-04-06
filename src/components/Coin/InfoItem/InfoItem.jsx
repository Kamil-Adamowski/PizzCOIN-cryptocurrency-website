
export const InfoItem = ({itemId, name}) => (
  <h1 className="text-main pb-2">
    <strong>{name}</strong>
    {itemId}
  </h1>
)