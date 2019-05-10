package com.betterprojectsfaster.jhipster.test.jhipster6java11.cucumber;

import com.betterprojectsfaster.jhipster.test.jhipster6java11.JHipster6Java11TestApp;
import cucumber.api.java.Before;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;

@SpringBootTest
@WebAppConfiguration
@ContextConfiguration(classes = JHipster6Java11TestApp.class)
public class CucumberContextConfiguration {

    @Before
    public void setup_cucumber_spring_context(){
        // Dummy method so cucumber will recognize this class as glue
        // and use its context configuration.
    }

}
