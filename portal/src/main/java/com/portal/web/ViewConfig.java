package com.portal.web;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.portal.dao.config.PortalDaoConfig;

@Configuration
@ComponentScan
@EnableWebMvc
@Import({ PortalDaoConfig.class })
public class ViewConfig extends WebMvcConfigurerAdapter {
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/extjs_4_2_2/**")
				.addResourceLocations("/extjs_4_2_/").setCachePeriod(10);
	}
}