require_relative 'server'


Before do
    @t = Thread.new do
      App.run! :host => 'localhost', :port => 4567
    end
end

After do
   Thread.kill(@t)
end