import { FluentReactNativeIconsProps } from "./FluentReactNativeIconsProps.types";
// import { makeStyles, mergeClasses } from "@griffel/react";

// const useRootStyles = makeStyles({
//     root: {
//         display: 'inline',
//         lineHeight: 0,

//         "@media (forced-colors: active)": {
//           forcedColorAdjust: 'auto',
//         }
//     }
// });

export const useIconState = <TBaseAttributes extends (React.SVGAttributes<SVGElement> | React.HTMLAttributes<HTMLElement>) = React.SVGAttributes<SVGElement>>(props: FluentReactNativeIconsProps<TBaseAttributes>): Omit<FluentReactNativeIconsProps<TBaseAttributes>, 'primaryFill'> => {
    const { title, primaryFill = "currentColor", ...rest } = props;
    const state = {
      ...rest,
      title: undefined,
      fill: primaryFill
    } as Omit<FluentReactNativeIconsProps<TBaseAttributes>, 'primaryFill'>;
  
    // const styles = useRootStyles();
  
    // state.className = mergeClasses(styles.root, state.className);
  
    if (title) {
      state['acessibilityLabel'] = title;
    }
  
    if (!state['acessibilityLabel'] && !state['accessibilityLabelledBy']) {
      state['accessibilityHidden'] = true;
    } else {
      state['accessibilityRole'] = 'image';
    }
  
    return state;
};
