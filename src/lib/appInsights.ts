import { ApplicationInsights } from '@microsoft/applicationinsights-web'
import { REACT_APP_INSIGHTS_KEY } from '../config/client.config';

export default (() => {

    const appInsights = new ApplicationInsights({
        config: {
            instrumentationKey: REACT_APP_INSIGHTS_KEY
        }
    });

    appInsights.loadAppInsights();
    appInsights.trackPageView();

    return appInsights
})()