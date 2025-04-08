import { THEMES } from '@/constants/themes';
import { ThemeType } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  current: ThemeType;
}

const getInitialTheme = (): ThemeType => {
  const savedTheme = localStorage.getItem('theme') as ThemeType;
  if (savedTheme && THEMES.some(theme => theme.id === savedTheme)) {
    return savedTheme;
  }
  return THEMES[0].id;
};

const initialState: ThemeState = {
  current: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.current = action.payload;
      localStorage.setItem('theme', action.payload);
    }
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;