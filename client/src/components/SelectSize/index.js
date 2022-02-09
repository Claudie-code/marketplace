export default function SelectSize({ selectedSize, setSelectedSize}) {
  const sizes = [
    { value: "36 EU"},
    { value: "36 2/3 EU"},
    { value: "37 1/3 EU"},
    { value: "38 EU"},
    { value: "38 2/3 EU"},
    { value: "39 1/3 EU"},
    { value: "40 EU"},
    { value: "40 2/3 EU"},
    { value: "41 1/3 EU"},
    { value: "42 EU"},
    { value: "42 2/3"},
    { value: "43 1/3 EU"},
    { value: "44 EU"},
    { value: "44 2/3 EU"},
    { value: "45 1/3 EU"},
    { value: "46 EU"},
    { value: "46 2/3 EU"},
  ]; 

  return (
    <div>
      <p>Select a size:</p>
      <select name="size" id="size-select" value={selectedSize} onChange={(event) => setSelectedSize(event.target.value)}>
          {sizes.map(size => (
              <option key={size.value} value={size.value}>{size.value}</option>
          ))}
      </select>
    </div>
  )
}
