import { data } from "@/mocks/data";
import * as C from "./styled";
import { useHealthyFood } from "@/context";
import { Anchor } from "@/components/header/styled";

export const Menu = () => {
  const { option, setOption } = useHealthyFood();
  const { header } = data;

  return (
    <C.Nav>
      <C.UnlistContent open={option.menu} aria-label={String(option.menu)}>
        <C.UnList>
          {header.menu.map(({ id, go, title }) => (
            <C.List key={id.toString()}>
              <Anchor
                onClick={() => setOption({ ...option, menu: !option.menu })}
                to={go}
                spy
                smooth
              >
                {title}
              </Anchor>
            </C.List>
          ))}
          <C.List>
            <C.RegisterAnchor
              onClick={() => setOption({ ...option, menu: false, modal: true })}
            >
              {header.register}
            </C.RegisterAnchor>
          </C.List>
        </C.UnList>
      </C.UnlistContent>
    </C.Nav>
  );
};
