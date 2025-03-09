import { ThemeConfig, theme} from 'antd'

const { darkAlgorithm, defaultAlgorithm } = theme;

const commonParams = {
    token: {
        fontFamily: 'PT Sans, sans-serif',
        fontSize: 16,
        fontSizeHeading1: 28,
        fontSizeHeading2: 22,
        fontSizeHeading3: 18,
        fontSizeHeading4: 16,
        fontSizeHeading5: 14,
        lineHeight: 1.35,
        controlHeight: 44,
    },

    components: {
        Button: {
            paddingInline: 17,
        },
        Input: {
            controlHeight: 48,
        },

        InputNumber: {
            controlHeight: 48,
            borderRadius: 4,
        },

        Select: {
            controlHeight: 48,
        },

        Switch: {
            trackHeight: 32,
            handleSize: 24,
            trackMinWidth: 62,
            trackPadding: 4,
        },
    }
}

export const dark: ThemeConfig = {
    algorithm: darkAlgorithm,

    ...commonParams
};


export const light: ThemeConfig = {
    algorithm: defaultAlgorithm,

    ...commonParams
};

export const darkGray: ThemeConfig = {
    ...commonParams,
    token: {
        ...commonParams.token,
        colorBgBase: '#212C3A',
        colorBgElevated: '#2A3645', 
        colorText: '#FFF',
        colorPrimary: '#E4004F',
        colorBorder: '#2A3645',
    },

    components: {
        Select: {
            optionActiveBg: '#2A3645',
            optionSelectedColor: '#FFF',
            optionSelectedBg: '#2A3645',
        },
    }
}

export const Theme = {
    dark,
    light,
    darkGray,
}