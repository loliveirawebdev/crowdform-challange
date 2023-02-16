import Svg, { Path } from "react-native-svg";

export const NatureIcon: React.FC<Icon> = ({ color }) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M4.75 1.90625L4.5 2.14062C4.5 2.14062 2.5 3.96289 2.5 6.28125C2.5 8.92383 4.85938 10.0781 4.85938 10.0781L5.40625 10.3438L5.5625 9.75C5.5625 9.75 5.69141 9.21094 6.1875 8.64062C6.68359 8.07031 7.50391 7.5 9 7.5C11.2285 7.5 12.7832 8.69727 13.2656 9.09375C12.8809 9.63281 11.4473 11.5 9 11.5C7.88477 11.5 7.13867 11.2578 6.6875 11.0625C7.33203 10.5586 8 10.2734 8.60938 10.1094C9.89453 9.76367 10.8906 9.98438 10.8906 9.98438L11.1094 9.01562C11.1094 9.01562 10.7969 8.93945 10.2969 8.92188C9.79688 8.9043 9.10352 8.9375 8.34375 9.14062C6.82422 9.54883 4.99609 10.6777 3.8125 13.2969L4.71875 13.7031C5.07617 12.9102 5.48633 12.291 5.92188 11.7969C6.39844 12.0391 7.47656 12.5 9 12.5C12.4453 12.5 14.4219 9.26562 14.4219 9.26562L14.6406 8.92188L14.3438 8.64062C14.3438 8.64062 12.0742 6.5 9 6.5C8.44922 6.5 7.98047 6.58203 7.54688 6.70312C7.61914 6.26562 7.6543 5.75195 7.51562 5.10938C7.05664 2.96484 5.0625 2.04688 5.0625 2.04688L4.75 1.90625ZM4.9375 3.17188C5.33008 3.40039 6.25 3.99609 6.53125 5.3125C6.67188 5.9707 6.62109 6.48633 6.53125 6.82812C6.44141 7.16992 6.34375 7.29688 6.34375 7.29688C6.00977 7.51758 5.65625 7.73438 5.4375 7.98438C5.38477 8.04492 5.3418 8.11133 5.29688 8.17188C5.26758 7.87695 5.24609 7.58008 5.25 7.29688C5.25781 6.56836 5.32812 5.98438 5.32812 5.98438L4.34375 5.84375C4.34375 5.84375 4.25977 6.48438 4.25 7.28125C4.24609 7.62695 4.25977 8.01172 4.29688 8.39062C3.88867 7.97656 3.5 7.32812 3.5 6.28125C3.5 4.82617 4.57422 3.57031 4.9375 3.17188Z"
        fill={color}
      />
    </Svg>
  );
};
