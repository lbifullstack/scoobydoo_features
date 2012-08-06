require 'sinatra/base'

class App < Sinatra::Base

    set :logging, false

    get "/status" do
        "Running"
    end

end

if __FILE__ == $0
    App.run!
end