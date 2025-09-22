import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

export default function Cta() {
  return (
    <div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in-up animation-delay-1200">
              <Card className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-slate-200 dark:via-purple-400 dark:to-slate-200 text-transparent bg-clip-text  shadow-xl">
                  <CardContent className="p-12">
                      <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
                      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                          Let's collaborate and bring your vision to life with our expertise and passion for technology.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button size="lg" className="px-8 py-4 text-lg font-semibold rounded-full group">
                              Get Started Today
                              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                          <Button
                              variant="outline"
                              size="lg"
                              className="px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
                          >
                              View Our Portfolio
                          </Button>
                      </div>
                  </CardContent>
              </Card>
          </div>
    </div>
  )
}
