import React from 'react'
import { IntlProvider } from 'react-intl'

interface IAppIntlProvider {
    children: any;
    localeMessages: { [key: string]: string }
}

export default function AppIntlProvider({
                                            children,
                                            localeMessages,
                                        }: IAppIntlProvider) {

    // locale prop not representative of actual locale as we load in from the server
    return (
        <IntlProvider locale="en" messages={ localeMessages }>
            { children }
        </IntlProvider>
    )
}