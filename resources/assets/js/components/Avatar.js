import Avatar from 'material-ui/Avatar';



const style = {margin: 5};

/**
 * Examples of `Avatar` using an image, [Font Icon](/#/components/font-icon), [SVG Icon](/#/components/svg-icon)
 * and "Letter" (string), with and without custom colors at the default size (`40dp`) and an alternate size (`30dp`).
 */
const Avatar = () => (

        <Avatar
          src="images/uxceo-128.jpg"
          size={30}
          style={style}
        />

);

export default Avatar;
