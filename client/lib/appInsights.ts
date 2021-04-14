import { ApplicationInsights } from '@microsoft/applicationinsights-web'
import { __DEV__, appInsightsKey } from '../config/client.config';

export default(() => {
    if(__DEV__) {
       return null

    }

    const appInsights = new ApplicationInsights({
        config: {
            instrumentationKey: appInsightsKey
        }
    });

    appInsights.loadAppInsights();
    appInsights.trackPageView();

    return appInsights
})()