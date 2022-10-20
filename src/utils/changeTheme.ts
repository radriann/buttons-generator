export const changeTheme = ():void => {
  const html = document.querySelector('html');
  if(!html?.classList.contains('dark')) {
      html?.classList.toggle('dark');
  } else {
      html?.classList.toggle('dark');
  }
}