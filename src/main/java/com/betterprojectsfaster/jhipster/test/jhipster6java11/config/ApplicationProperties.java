package com.betterprojectsfaster.jhipster.test.jhipster6java11.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * Properties specific to J Hipster 6 Java 11 Test.
 * <p>
 * Properties are configured in the {@code application.yml} file.
 * See {@link io.github.jhipster.config.JHipsterProperties} for a good example.
 */
@ConfigurationProperties(prefix = "application", ignoreUnknownFields = false)
public class ApplicationProperties {

}
