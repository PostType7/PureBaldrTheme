import { memo } from "react";
import { NavItem } from ".";
import { IconText, Text } from "../typo";

interface Props {
  blocks: any;
  parentId?: number | string;
  expand?: string[];
}

const TreeNavItem:any = (item: any, i: number) => {
  return (
    <NavItem
      key={`nav-${item.id}-${i}`}
      color="dark"
      href={item.url}
      paddingY="md"
      paddingX="lg"
    >
      <IconText mobile icon={item?.icon ? item.icon : null} text={item.name} />
    </NavItem>
  );
};

const TreeText:any = (item: any,i: number) => {
  return (
    <Text key={`text-${item.id}-${i}`} className={item.className}>
      {item.text}
    </Text>
  );
};

export const Tree: React.FC<Props> = memo(
  ({ blocks, parentId = 0, expand = [] }: Props) => {
    // @ts-ignore
    const items = blocks.filter((item) => item.parentId === parentId);
    if (!items.length) return null;

    return (
      <>
        {items.map((item: any, i:number) => {
          return (
            <>
              {item.component === "NavItem" ? (
                TreeNavItem(item,i)
              ) : item.component === "Text" ? (
                TreeText(item,i)
              ) : (
                null
              )}

              {
                // @ts-ignore
                expand.includes(item.id) ? (
                  <Tree blocks={blocks} parentId={item.id} expand={expand} />
                ) : (
                  null
                )
              }
            </>
          );
        })}
      </>
    );
  }
);
