

def app_path
  ENV['APP_BUNDLE_PATH'] || (defined?(APP_BUNDLE_PATH) && APP_BUNDLE_PATH)
end

Given /^I launch the app$/ do
  # latest sdk and iphone by default
  launch_app app_path
end

Given /^our application is running$/ do
    launch_app app_path , '5.1' , 'ipad'
end

When /^i access the application status$/ do
  touch "view:'UITabBarButton' marked:'Status'"
end

Then /^i should get back a valid response$/ do
  check_element_exists "view:'UILabel' marked:'applicationStatus'"
  status_text = frankly_map( "view:'UILabel' marked:'applicationStatus'", "text" )
  status_text[0].should == "Application Status ... Running"
end

Given /^I launch the app using iOS (\d\.\d)$/ do |sdk|
  # You can grab a list of the installed SDK with sim_launcher
  # > run sim_launcher from the command line
  # > open a browser to http://localhost:8881/showsdks
  # > use one of the sdk you see in parenthesis (e.g. 4.2)
  launch_app app_path, sdk
end

Given /^I launch the app using iOS (\d\.\d) and the (iphone|ipad) simulator$/ do |sdk, version|
  launch_app app_path, sdk, version
end
