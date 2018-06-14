Originally like this but get downshift props get destructured

```
<Downshift>
  {(downshift) => (
    <div>
      <label>Select a Star Wars character</label>
      <input />
    </div>
  )}
</Downshift>
```

For accessibility purposes we will getLabelProps and getInputProps..., apply some aria- handy things out of the box using props getters. getMenuProps also

Menu better to use ul instead of div for accessibility purposes

```
isOpen state from downshift can be taken by destructuring isOpen
```

Fix itemToString error by providing our own itemToString

```
 <Downshift itemToString={itemToString}>
```

Instead of wiring this onClick selectItem we can instead do getItemProps, it requires argument item and can pass down key prop in a funky way

```
{...getItemProps({ item, key: item.id })}
```

Cant visually see the highlighted item => Need `highlightedIndex`

4 items of state in downshift: highlightedIndex, selectedItem, isOpen, inputValue