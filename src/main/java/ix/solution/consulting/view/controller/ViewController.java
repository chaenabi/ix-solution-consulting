package ix.solution.consulting.view.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/view")
public class ViewController {

    @GetMapping("/post")
    public ModelAndView goToPostPage() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("post");
        return mv;
    }
}
