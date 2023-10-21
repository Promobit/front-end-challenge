import { CloseButtonComponent, SelectButtonComponent } from "./style";

interface Props {
  label: string;
  id: number;
  selected?: number;
  handleSelect: (id: number) => void;
  handleRemove: (id: number) => void;
}
export const SelectButton: React.FC<Props> = ({
  id,
  label,
  selected,
  handleSelect,
  handleRemove,
}) => {
  return (
    <SelectButtonComponent selected={selected} onClick={() => handleSelect(id)}>
      {label}
      {selected && (
        <CloseButtonComponent
          onClick={(e) => {
            e.stopPropagation();
            handleRemove(id);
          }}
        >
          <img src="/assets/img/close_btn.png" alt="Botão de remover filtro" />
        </CloseButtonComponent>
      )}
    </SelectButtonComponent>
  );
};
